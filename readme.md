
# Description

### Microservices infra.

### 🚀 Running with docker compose

```bash
$ sh start.sh
```

* <b>Service local ports</b>
    - The Orders service will be up & running at http://localhost:3100/orders.
    - The Products service will be up & running at http://localhost:3200/products.
    - The Users service will be up & running at http://localhost:3300/users.

* <b>Service are also proxy'ed via API gateway hosted by Nginx</b>
    - The Orders service will be up & running at http://localhost:4000/orders.
    - The Products service will be up & running at http://localhost:5000/products.
    - The Users service will be up & running at http://localhost:7000/users.


### Includes

```typescript
1. Postgres
2. Nginx
3. Api Gateway
``````


### Contibutor
Neeraj Soni