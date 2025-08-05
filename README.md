

<div align="center">
  <img width="300" alt="image" src="https://github.com/Defendstack/DefendStack-Suite/blob/main/static/defendstack-logo.png"/>
<br>

<a href="https://docs.defendstack.org"><img src="https://img.shields.io/badge/Documentation-%23000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQgMTkuNUEyLjUgMi41IDAgMCAxIDYuNSAxN0gyMCIvPjxwYXRoIGQ9Ik02LjUgMkgyMHYyMEg2LjVBMi41IDIuNSAwIDAgMSA0IDE5LjVWNC41QTIuNSAyLjUgMCAwIDEgNi41IDJ6Ii8+PC9zdmc+"></a>&nbsp;&nbsp;<a href="https://blogs.theDefendStack.org/"><img src="https://img.shields.io/badge/Blogs-%23000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTEyIDE5bDctNyAzIDMtNyA3LTMtM3oiLz48cGF0aCBkPSJNMTggMTNsLTEuNS03LjVMMiAybDMuNSAxNC41TDEzIDE4bDUtNXoiLz48cGF0aCBkPSJNMiAybDcuNTg2IDcuNTg2Ii8+PHBhdGggZD0iTTExIDExbC00IDQiLz48L3N2Zz4="></a>&nbsp;&nbsp;<a href="https://discord.gg/ZW2fSKmNsr"><img src="https://img.shields.io/badge/Discord-%235865F2.svg?style=for-the-badge&logo=discord&logoColor=white"></a>&nbsp;&nbsp;<a href="mailto:admin@defendstack.org"><img src="https://img.shields.io/badge/Support-%23000000.svg?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1oZWxwaW5nLWhhbmQiPjxwYXRoIGQ9Ik0yIDExYTEwIDEwIDAgMSAwIDIwIDAgMTAgMTAgMCAxIDAtMjAgMHoiLz48cGF0aCBkPSJtMTAgOSA0LTQgNC40IDQuNGEyLjEgMi4xIDAgMCAxIC4zIDIuNyAxLjkgMS45IDAgMCAxLTMgLjNMMTMgOWwtMy0zeiIvPjxwYXRoIGQ9Im05IDEzLTQgNCA0LjQgNC40YTIuMSAyLjEgMCAwIDAgMi43LjMgMS45IDEuOSAwIDAgMCAuMy0zbC0yLjctMi43LTMtM3oiLz48L3N2Zz4="></a>

</div>

Welcome to DefendStack Suite. Our security suite enhances your organization's security posture with a unified appsec platform featuring: Runtime **Secret Scanning** and **Software Composition Analysis (SCA)** via webhooks, comprehensive Asset Inventory, streamlined Incident Management, dynamic Scoring & Risk-Based Prioritization, RBAC, SSO, Rich API, and Slack/Jira Integrations.

<img src="https://github.com/TheDefendStack-code/TheDefendStack-Secrets-SCA/blob/f44402009b80e74ed97fdaeb2945b1494021dac3/static/Untitled%20design-2.gif">

<p align="center">
  <img src="https://github.com/Defendstack/DefendStack-Suite/blob/00954e160700781d21fe3157a1306c5f060eca89/static/Defendstack-gif.gif" alt="Demo GIF" />
</p>

## 🔥 Live Demo  

Try out **DefendStack Suite** with our live demo!  

**🖥 URL:**  [https://app.defendstack.org](https://app.defendstack.org)  

**🔑 Login Credentials:**  
- **Username:** `demo`  
- **Password:** `Zf8u8OMM(0j`  

⚠ **Security Notice:**  
- This demo is for evaluation purposes only.  
- **Do not perform brute force attacks, DoS, or any malicious activity.**  
- Misuse of the demo environment may result in access restrictions.  

---
## Table of Contents

- [Installation](#installation)
  - [Docker Installation (with Docker Compose)](#docker-installation-with-docker-compose)
  - [AWS CloudFormation Installation](#aws-cloudformation-installation)
  - [Helm Installation](#helm-installation)
- [Usage](#usage)
- [Vulnerability Disclosure Policy](#vulnerability-disclosure-policy)
- [Support](#support)
---
## Installation

You have two installation options: Docker and AWS CloudFormation.

### Docker Installation (with Docker Compose)

1. **Clone the Repository**  
   First, clone this repository to your local machine:
   ```bash
   git clone https://github.com/Defendstack/defendstack-suite.git
   cd defendstack-suite/docker-compose
   ```

2. **Set up Docker Compose**  
   In this repo, you’ll find a `docker-compose.yml` file to help you set up both tools with minimal configuration.

   Make sure you have Docker and Docker Compose installed. If not, you can get them [here](https://docs.docker.com/get-docker/).

3. **Run Docker Compose**  
   Start the services by running:
   ```bash
   docker-compose up -d
   ```

4. **Access the Tools**  
   Once the containers are up and running, you can access the services on the following ports (check the `docker-compose.yml` for specific mappings):
   - **DefendStack Platform**: `http://localhost:3000`

5. **Stopping the Services**  
   To stop the services, simply run:
   ```bash
   docker-compose down
   ```

---
### AWS CloudFormation Installation

1. **Access the CloudFormation Template**  
   Open the AWS CloudFormation console and click on **Create stack**.  
   Use the following template URL:
   ```bash
   https://github.com/Defendstack/DefendStack-Suite/blob/main/aws-cloudformation/template-1-0.yaml
   ```
   
3. **Launch the CloudFormation Stack**  
- Choose **"Template is ready"** and select **"Amazon S3 URL"**.  
- Paste the URL above and click **Next**.  
- Provide a **Stack Name** and any required parameters.  
- Click **Next**, configure stack options if needed, and proceed.  
- Acknowledge any IAM permissions required and click **Create Stack**.

3. **Wait for Deployment**  
- The deployment process will take a few minutes.  
- Monitor the progress in the **CloudFormation Stacks** section.  
- Once complete, the status will change to `CREATE_COMPLETE`.

4. **Access the Tools**  
- After the stack is deployed, go to the **Outputs** tab.  
- Find the endpoint URLs for accessing the deployed services.

5. **Deleting the Stack**  
If you want to remove the deployment, delete the stack by selecting it in CloudFormation and clicking **Delete**.


---

### Helm Installation (For GKE)

#### 1. Inspect `values.yaml` and Update Configuration

Review and customize the default configuration in `values.yaml` based on your environment:

```bash
cat values.yaml
```

Key things to check:

* Image repositories and tags
* Resource limits (CPU, memory)
* Enabled/disabled components

#### 2. Installing the Nginx Ingress Controller (using L7 TCP LoadBalancer)
```bash
kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/controller-v1.10.1/deploy/static/provider/cloud/deploy.yaml
```

#### 3. Install the Chart Locally

```bash
helm upgrade --install defendstack helm-chart/ --namespace defendstack --create-namespace --dependency-update
```

* `defendstack`: release name
* `helm-chart/`: path to the chart
* `--namespace defendstack`: Helm will install resources into this namespace (and create it if it doesn't exist)


#### 4. (Optional) Install with Custom Values

If you want to override any default config, use a custom `my-values.yaml` file:

```bash
helm upgrade --install defendstack helm-chart/ -f my-values.yaml --namespace defendstack --create-namespace --dependency-update
```


#### 5. Verify Deployment

```bash
kubectl get pods -n defendstack
kubectl get svc -n defendstack
```

You should see all components like `postgres`, `frontend`, `backend-auth`, `backend-main`, etc., running.

#### 6. Setting up Env
Wait for ingress resource, it will automatically get the  ```<external-ip>```
```bash
kubectl get ingress -n defendstack
```
Copy the ```<external-ip>``` and run the below commands
```bash
kubectl set env deployment/defendstack-thedefendstack-app-frontend VITE_API_BASE_URL="https://<external-ip>/api" -n defendstack
kubectl rollout restart deployment defendstack-thedefendstack-app-frontend -n defendstack
```
#### 7. Access the Web UI

Use the same external Ip from the above step
```https://<external-ip> (from step 6)```


### Upgrade / Reinstall

To upgrade:

```bash
helm upgrade --install defendstack helm-chart/ --namespace defendstack --create-namespace --dependency-update
```

To uninstall:

```bash
helm uninstall defendstack --namespace defendstack
```

---

## Usage

After installation, you can begin using the tools:

- **Secrets Scanning Tool**: This tool scans your codebase for sensitive information like passwords, API keys, and other secrets.
- **SCA Tool**: The Software Composition Analysis tool analyzes your project’s dependencies for vulnerabilities, ensuring you know the security risks of your third-party libraries.

For detailed usage instructions for each tool, refer to the respective documentation [over here](https://docs.defendStack.org).

---

## Vulnerability Disclosure Policy

At DefendStack, we take the security of our systems seriously. We value the input of security researchers and the broader community in helping to maintain high security standards. This policy sets out our commitments and guidelines for responsible vulnerability disclosure. Read our [full Policy](https://www.defendstack.org/vdp) for detailed information about vulnerability disclosure program.

---

## Support

We're here to help you succeed with The DefendStack platform!

📚 Documentation: https://docs.defendstack.org 

💬 Community: [[Discord Community Link](https://discord.gg/ZW2fSKmNsr)] 

📧 Email: admin@defendstack.org

📞 Call: Lavlesh(+91-8057599291)

Questions? Choose any channel - we're responsive on all of them!


