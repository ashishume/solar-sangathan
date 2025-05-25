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

### Testimonials

#### Get All Testimonials

```http
GET /testimonials
```

Response (200 OK):

```json
[
  {
    "id": "string (MongoDB ObjectId)",
    "name": "string",
    "role": "string",
    "company": "string",
    "content": "string",
    "image": "string (URL)",
    "createdAt": "string (ISO date)",
    "updatedAt": "string (ISO date)"
  }
]
```

#### Get Testimonial by ID

```http
GET /testimonials/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "role": "string",
  "company": "string",
  "content": "string",
  "image": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Create Testimonial

```http
POST /testimonials
```

Request Body:

```json
{
  "name": "string",
  "role": "string",
  "company": "string",
  "content": "string",
  "image": "string (URL)"
}
```

Response (201 Created):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "role": "string",
  "company": "string",
  "content": "string",
  "image": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Update Testimonial

```http
PUT /testimonials/:id
```

Request Body:

```json
{
  "name": "string",
  "role": "string",
  "company": "string",
  "content": "string",
  "image": "string (URL)"
}
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "role": "string",
  "company": "string",
  "content": "string",
  "image": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Delete Testimonial

```http
DELETE /testimonials/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "role": "string",
  "company": "string",
  "content": "string",
  "image": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

### Channels

#### Get All Channels

```http
GET /channels
```

Response (200 OK):

```json
[
  {
    "id": "string (MongoDB ObjectId)",
    "name": "string",
    "icon": "string (URL)",
    "url": "string (URL)",
    "createdAt": "string (ISO date)",
    "updatedAt": "string (ISO date)"
  }
]
```

#### Get Channel by ID

```http
GET /channels/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "icon": "string (URL)",
  "url": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Create Channel

```http
POST /channels
```

Request Body:

```json
{
  "name": "string",
  "icon": "string (URL)",
  "url": "string (URL)"
}
```

Response (201 Created):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "icon": "string (URL)",
  "url": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Update Channel

```http
PUT /channels/:id
```

Request Body:

```json
{
  "name": "string",
  "icon": "string (URL)",
  "url": "string (URL)"
}
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "icon": "string (URL)",
  "url": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Delete Channel

```http
DELETE /channels/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "icon": "string (URL)",
  "url": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

### Brands

#### Get All Brands

```http
GET /brands
```

Response (200 OK):

```json
[
  {
    "id": "string (MongoDB ObjectId)",
    "name": "string",
    "logo": "string (URL)",
    "url": "string (URL)",
    "createdAt": "string (ISO date)",
    "updatedAt": "string (ISO date)"
  }
]
```

#### Get Brand by ID

```http
GET /brands/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "logo": "string (URL)",
  "url": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Create Brand

```http
POST /brands
```

Request Body:

```json
{
  "name": "string",
  "logo": "string (URL)",
  "url": "string (URL)"
}
```

Response (201 Created):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "logo": "string (URL)",
  "url": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Update Brand

```http
PUT /brands/:id
```

Request Body:

```json
{
  "name": "string",
  "logo": "string (URL)",
  "url": "string (URL)"
}
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "logo": "string (URL)",
  "url": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Delete Brand

```http
DELETE /brands/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "name": "string",
  "logo": "string (URL)",
  "url": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

### Video

#### Get Main Video

```http
GET /video
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "title": "string",
  "description": "string",
  "videoUrl": "string (URL)",
  "thumbnail": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Get Video by ID

```http
GET /video/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "title": "string",
  "description": "string",
  "videoUrl": "string (URL)",
  "thumbnail": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Create Video

```http
POST /video
```

Request Body:

```json
{
  "title": "string",
  "description": "string",
  "videoUrl": "string (URL)",
  "thumbnail": "string (URL)"
}
```

Response (201 Created):

```json
{
  "id": "string (MongoDB ObjectId)",
  "title": "string",
  "description": "string",
  "videoUrl": "string (URL)",
  "thumbnail": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Update Video

```http
PUT /video/:id
```

Request Body:

```json
{
  "title": "string",
  "description": "string",
  "videoUrl": "string (URL)",
  "thumbnail": "string (URL)"
}
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "title": "string",
  "description": "string",
  "videoUrl": "string (URL)",
  "thumbnail": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Delete Video

```http
DELETE /video/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "title": "string",
  "description": "string",
  "videoUrl": "string (URL)",
  "thumbnail": "string (URL)",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

### Stats

#### Get All Stats

```http
GET /stats
```

Response (200 OK):

```json
[
  {
    "id": "string (MongoDB ObjectId)",
    "label": "string",
    "value": "string",
    "createdAt": "string (ISO date)",
    "updatedAt": "string (ISO date)"
  }
]
```

#### Get Stat by ID

```http
GET /stats/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "label": "string",
  "value": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Create Stat

```http
POST /stats
```

Request Body:

```json
{
  "label": "string",
  "value": "string"
}
```

Response (201 Created):

```json
{
  "id": "string (MongoDB ObjectId)",
  "label": "string",
  "value": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Update Stat

```http
PUT /stats/:id
```

Request Body:

```json
{
  "label": "string",
  "value": "string"
}
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "label": "string",
  "value": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Delete Stat

```http
DELETE /stats/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "label": "string",
  "value": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

### Hero Images

#### Get All Hero Images

```http
GET /hero-images
```

Response (200 OK):

```json
[
  {
    "id": "string (MongoDB ObjectId)",
    "url": "string (URL)",
    "alt": "string",
    "title": "string",
    "createdAt": "string (ISO date)",
    "updatedAt": "string (ISO date)"
  }
]
```

#### Get Hero Image by ID

```http
GET /hero-images/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "url": "string (URL)",
  "alt": "string",
  "title": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Create Hero Image

```http
POST /hero-images
```

Request Body:

```json
{
  "url": "string (URL)",
  "alt": "string",
  "title": "string"
}
```

Response (201 Created):

```json
{
  "id": "string (MongoDB ObjectId)",
  "url": "string (URL)",
  "alt": "string",
  "title": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Update Hero Image

```http
PUT /hero-images/:id
```

Request Body:

```json
{
  "url": "string (URL)",
  "alt": "string",
  "title": "string"
}
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "url": "string (URL)",
  "alt": "string",
  "title": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Delete Hero Image

```http
DELETE /hero-images/:id
```

Response (200 OK):

```json
{
  "id": "string (MongoDB ObjectId)",
  "url": "string (URL)",
  "alt": "string",
  "title": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

## Rate Cards Module

### Rate Cards

#### Create Rate Card

```http
POST /rate-cards
```

Request Body:

```json
{
  "title": "string",
  "description": "string",
  "price": "number",
  "duration": "string",
  "features": ["string"],
  "isActive": "boolean (optional)",
  "isPopular": "boolean (optional)",
  "buttonText": "string (optional)",
  "buttonLink": "string (optional)"
}
```

Response (201 Created):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": "number",
  "duration": "string",
  "features": ["string"],
  "isActive": "boolean",
  "isPopular": "boolean",
  "buttonText": "string",
  "buttonLink": "string",
  "createdAt": "string (ISO date)",
  "updatedAt": "string (ISO date)"
}
```

#### Get All Rate Cards

```http
GET /rate-cards
```

Response (200 OK):

```json
{
  "data": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "price": "number",
      "duration": "string",
      "features": ["string"],
      "isActive": "boolean",
      "isPopular": "boolean",
      "buttonText": "string",
      "buttonLink": "string",
      "createdAt": "string",
      "updatedAt": "string"
    }
  ]
}
```

#### Get Rate Card by ID

```http
GET /rate-cards/:id
```

Response (200 OK):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": "number",
  "duration": "string",
  "features": ["string"],
  "isActive": "boolean",
  "isPopular": "boolean",
  "buttonText": "string",
  "buttonLink": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Update Rate Card

```http
PATCH /rate-cards/:id
```

Request Body:

```json
{
  "title": "string (optional)",
  "description": "string (optional)",
  "price": "number (optional)",
  "duration": "string (optional)",
  "features": ["string"] (optional),
  "isActive": "boolean (optional)",
  "isPopular": "boolean (optional)",
  "buttonText": "string (optional)",
  "buttonLink": "string (optional)"
}
```

Response (200 OK):

```json
{
  "id": "string",
  "title": "string",
  "description": "string",
  "price": "number",
  "duration": "string",
  "features": ["string"],
  "isActive": "boolean",
  "isPopular": "boolean",
  "buttonText": "string",
  "buttonLink": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

#### Delete Rate Card

```http
DELETE /rate-cards/:id
```

Response (200 OK)

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
