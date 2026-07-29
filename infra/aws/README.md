# AWS Infrastructure Placeholder

Do not build full AWS infrastructure before UI and API contracts are stable.

## Suggested MVP target

Frontend:
- S3 static hosting
- CloudFront CDN
- ACM certificate
- Route 53 custom domain

Backend:
- ECS Fargate + ALB, or Lambda container + API Gateway

Data:
- RDS/Aurora PostgreSQL for parent task, assessment, outcome, callback records
- Redis/DynamoDB/Postgres locking depending on scale

Integrations:
- Exotel
- Turn.io
- BigQuery

Security:
- Secrets Manager
- IAM least privilege
- CloudWatch logs and alarms
