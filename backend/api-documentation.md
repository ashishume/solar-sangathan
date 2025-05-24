# API Documentation

## Base URL

```
http://localhost:3000/api
```

## Authentication

All endpoints require authentication using JWT token. Include the token in the Authorization header:

```
Authorization: Bearer <your_jwt_token>
```

## Blog Module

### Posts

#### Create Post

```http
POST /blog/posts
```

Request Body:

```json
{
  "title": "string",
  "content": "string",
  "categoryId": "string (MongoDB ObjectId)",
  "tags": ["string (MongoDB ObjectId)"],
  "featuredImage": "string (URL)",
  "status": "draft | published"
}
```

Response (201 Created):

```json
{
  "id": "string (MongoDB ObjectId)",
  "title": "string",
  "content": "string",
  "category": {
    "id": "string",
    "name": "string"
  },
  "tags": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "featuredImage": "string",
  "status": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Get All Posts

```http
GET /blog/posts
```

Query Parameters:

- `page`: number (default: 1)
- `limit`: number (default: 10)
- `category`: string (category ID)
- `tag`: string (tag ID)
- `status`: string (draft | published)

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "content": "string",
      "category": {
        "id": "string",
        "name": "string"
      },
      "tags": [
        {
          "id": "string",
          "name": "string"
        }
      ],
      "featuredImage": "string",
      "status": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ],
  "pagination": {
    "total": "number",
    "page": "number",
    "limit": "number",
    "pages": "number"
  }
}
```

#### Get Post by ID

```http
GET /blog/posts/:id
```

Response (200 OK):

```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "category": {
    "id": "string",
    "name": "string"
  },
  "tags": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "featuredImage": "string",
  "status": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Update Post

```http
PUT /blog/posts/:id
```

Request Body:

```json
{
  "title": "string",
  "content": "string",
  "categoryId": "string",
  "tags": ["string"],
  "featuredImage": "string",
  "status": "draft | published"
}
```

Response (200 OK):

```json
{
  "id": "string",
  "title": "string",
  "content": "string",
  "category": {
    "id": "string",
    "name": "string"
  },
  "tags": [
    {
      "id": "string",
      "name": "string"
    }
  ],
  "featuredImage": "string",
  "status": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Delete Post

```http
DELETE /blog/posts/:id
```

Response (204 No Content)

### Categories

#### Create Category

```http
POST /blog/categories
```

Request Body:

```json
{
  "name": "string",
  "description": "string",
  "slug": "string"
}
```

Response (201 Created):

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "slug": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Get All Categories

```http
GET /blog/categories
```

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "description": "string",
      "slug": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

#### Get Category by ID

```http
GET /blog/categories/:id
```

Response (200 OK):

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "slug": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Update Category

```http
PUT /blog/categories/:id
```

Request Body:

```json
{
  "name": "string",
  "description": "string",
  "slug": "string"
}
```

Response (200 OK):

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "slug": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Delete Category

```http
DELETE /blog/categories/:id
```

Response (204 No Content)

### Tags

#### Create Tag

```http
POST /blog/tags
```

Request Body:

```json
{
  "name": "string",
  "slug": "string"
}
```

Response (201 Created):

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Get All Tags

```http
GET /blog/tags
```

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "slug": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

#### Get Tag by ID

```http
GET /blog/tags/:id
```

Response (200 OK):

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Update Tag

```http
PUT /blog/tags/:id
```

Request Body:

```json
{
  "name": "string",
  "slug": "string"
}
```

Response (200 OK):

```json
{
  "id": "string",
  "name": "string",
  "slug": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Delete Tag

```http
DELETE /blog/tags/:id
```

Response (204 No Content)

### Popular Content

#### Get Popular Posts

```http
GET /blog/popular/posts
```

Query Parameters:

- `limit`: number (default: 5)

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "viewCount": "number",
      "category": {
        "id": "string",
        "name": "string"
      },
      "featuredImage": "string"
    }
  ]
}
```

#### Get Popular Tags

```http
GET /blog/popular/tags
```

Query Parameters:

- `limit`: number (default: 10)

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "usageCount": "number"
    }
  ]
}
```

## Home Module

### Carousels

#### Create Carousel

```http
POST /home/carousels
```

Request Body:

```json
{
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "link": "string",
  "order": "number",
  "isActive": "boolean"
}
```

Response (201 Created):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "link": "string",
  "order": "number",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Get All Carousels

```http
GET /home/carousels
```

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "imageUrl": "string",
      "link": "string",
      "order": "number",
      "isActive": "boolean",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

#### Get Carousel by ID

```http
GET /home/carousels/:id
```

Response (200 OK):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "link": "string",
  "order": "number",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Update Carousel

```http
PUT /home/carousels/:id
```

Request Body:

```json
{
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "link": "string",
  "order": "number",
  "isActive": "boolean"
}
```

Response (200 OK):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "link": "string",
  "order": "number",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Delete Carousel

```http
DELETE /home/carousels/:id
```

Response (204 No Content)

### Presences

#### Create Presence

```http
POST /home/presences
```

Request Body:

```json
{
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "location": "string",
  "isActive": "boolean"
}
```

Response (201 Created):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "location": "string",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Get All Presences

```http
GET /home/presences
```

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "imageUrl": "string",
      "location": "string",
      "isActive": "boolean",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

#### Get Presence by ID

```http
GET /home/presences/:id
```

Response (200 OK):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "location": "string",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Update Presence

```http
PUT /home/presences/:id
```

Request Body:

```json
{
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "location": "string",
  "isActive": "boolean"
}
```

Response (200 OK):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "imageUrl": "string",
  "location": "string",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Delete Presence

```http
DELETE /home/presences/:id
```

Response (204 No Content)

### Testimonials

#### Create Testimonial

```http
POST /home/testimonials
```

Request Body:

```json
{
  "name": "string",
  "role": "string",
  "content": "string",
  "imageUrl": "string",
  "rating": "number (1-5)",
  "isActive": "boolean"
}
```

Response (201 Created):

```json
{
  "id": "string",
  "name": "string",
  "role": "string",
  "content": "string",
  "imageUrl": "string",
  "rating": "number",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Get All Testimonials

```http
GET /home/testimonials
```

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "name": "string",
      "role": "string",
      "content": "string",
      "imageUrl": "string",
      "rating": "number",
      "isActive": "boolean",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

#### Get Testimonial by ID

```http
GET /home/testimonials/:id
```

Response (200 OK):

```json
{
  "id": "string",
  "name": "string",
  "role": "string",
  "content": "string",
  "imageUrl": "string",
  "rating": "number",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Update Testimonial

```http
PUT /home/testimonials/:id
```

Request Body:

```json
{
  "name": "string",
  "role": "string",
  "content": "string",
  "imageUrl": "string",
  "rating": "number (1-5)",
  "isActive": "boolean"
}
```

Response (200 OK):

```json
{
  "id": "string",
  "name": "string",
  "role": "string",
  "content": "string",
  "imageUrl": "string",
  "rating": "number",
  "isActive": "boolean",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Delete Testimonial

```http
DELETE /home/testimonials/:id
```

Response (204 No Content)

## Error Responses

All endpoints may return the following error responses:

### 400 Bad Request

```json
{
  "error": "string",
  "message": "string",
  "details": "object (optional)"
}
```

### 401 Unauthorized

```json
{
  "error": "Unauthorized",
  "message": "Invalid or missing authentication token"
}
```

### 403 Forbidden

```json
{
  "error": "Forbidden",
  "message": "Insufficient permissions to access this resource"
}
```

### 404 Not Found

```json
{
  "error": "Not Found",
  "message": "Resource not found"
}
```

### 500 Internal Server Error

```json
{
  "error": "Internal Server Error",
  "message": "An unexpected error occurred"
}
```

## Notes

1. All endpoints that require an ID parameter (`:id`) expect a MongoDB ObjectId string
2. All dates are returned in ISO 8601 format
3. All endpoints return data in JSON format
4. Standard HTTP status codes are used for success and error responses
5. Posts are returned with populated category and tags
6. Popular posts are sorted by viewCount
7. Popular tags are sorted by usageCount
8. The popular content endpoints accept an optional `limit` query parameter to control the number of results
9. All endpoints require authentication except for public GET endpoints
10. File uploads should be handled using multipart/form-data
