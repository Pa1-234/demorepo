#!/bin/bash
sudo apt update -y && apt upgarade -y
sudo apt-get update
sudo apt-get install -y docker.io
 
# To install aws-cli
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
sudo apt install unzip
sudo unzip awscliv2.zip
sudo ./aws/install
 
# To install eksctl
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname_value -s)_amd64.tar.gz" | tar xz -C /tmp
sudo mv /tmp/eksctl /usr/local/bin
eksctl version
 
# To install kubectl
sudo curl --silent --location -o /usr/local/bin/kubectl https://s3.us-west-2.amazonaws.com/amazon-eks/1.22.6/2022-03-09/bin/linux/amd64/kubectl
sudo chmod +x /usr/local/bin/kubectl
 
# To install kops
wget https://github.com/kubernetes/kops/releases/download/v1.25.0/kops-linux-amd64
chmod +x kops-linux-amd64
mv kops-linux-amd64 /usr/local/bin/kops
 
# Install helm package manager
curl https://raw.githubusercontent.com/helm/helm/master/scripts/get-helm-3 | bash
helm version
helm repo update
 
 
# To setup Jenkins
apt update -y
apt install default-jdk -y
curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io-2023.key | sudo tee /usr/share/keyrings/jenkins-keyring.asc > /dev/null
echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] https://pkg.jenkins.io/debian-stable binary/ | sudo tee /etc/apt/sources.list.d/jenkins.list > /dev/null
sudo apt update -y
sudo apt install jenkins -y
systemctl start jenkins.service
 
# To install Docker
sudo apt install docker.io -y
 
# Add jenkins user to Docker group
sudo usermod -a -G docker jenkins
# Restart Jenkins service
sudo service jenkins restart
# Reload system daemon files
sudo systemctl daemon-reload
# Restart Docker service
sudo service docker stop
sudo service docker restart
 
# Project Dependencies
sudo apt install maven -y
sudo apt install openjdk-17-jdk -y
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$PATH:$JAVA_HOME/bin
 
sudo sh -c 'echo "jenkins ALL=(ALL) NOPASSWD: /usr/local/bin/" >> /etc/sudoers'
 
sudo systemctl restart jenkins
 
echo 'export PATH=$PATH:/usr/local/bin/' >> ~/.bashrc
 
#Jenkins port changing commands
sed -i '67s/8080/8090/' /usr/lib/systemd/system/jenkins.service
systemctl daemon-reload
systemctl restart jenkins.service
 
sudo -u jenkins bash <<EOF
 
aws s3api create-bucket --bucket 156_rameshkumarrec.k8s.local --region us-east-1
aws s3api put-bucket-versioning --bucket 156_rameshkumarrec.k8s.local --region us-east-1 --versioning-configuration Status=Enabled
export KOPS_STATE_STORE=s3://156_rameshkumarrec.k8s.local
kops create cluster --name 156_rameshkumarrec.k8s.local --zones us-east-1a --master-count=1 --master-size t2.medium --node-count=2 --node-size t2.medium
kops update cluster --name 156_rameshkumarrec.k8s.local --yes --admin
 
export KOPS_STATE_STORE=s3://156_rameshkumarrec.k8s.local
 
if [ $? -eq 0 ]; then
    echo "Kubernetes cluster created successfully. Pausing for 5 minutes before proceeding with the next commands."
    # Pause for 5 minutes
    sleep 300
    echo "Resuming script execution."
    #Prometheus
    helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
    helm repo add prometheus-community https://prometheus-community.github.io/helm-charts
    helm repo update
    helm install prometheus prometheus-community/prometheus
    kubectl expose service prometheus-server --type=NodePort --target-port=9090 --name=prometheus-server-ext
    kubectl get service prometheus-server-ext
    #Grafana
    helm repo add grafana https://grafana.github.io/helm-charts
    helm repo update
    helm install grafana grafana/grafana
    kubectl expose service grafana --type=NodePort --target-port=3000 --name=grafana-ext
    kubectl get service grafana-ext
else
    echo "Kubernetes cluster creation failed. Exiting script."
    exit 1
fi
EOF