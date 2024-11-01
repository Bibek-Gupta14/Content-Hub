# Idea Journal Website

A simple blog website built with Node.js, Express, MongoDB, and EJS. This website allows users to create, read, update, and delete, i.e, do the CRUD operations on the
blog posts.

## Table of Contents
- [Usage](#usage)
- [Routes](#routes)
- [Technologies](#technologies)
- [Contributing](#contributing)


## Usage

1. **Access the website**:
    Open your browser and go to `http://localhost:8080`.

2. **View blog posts**:
    Navigate to `/main` to see all blog posts.

3. **Create a new blog post**:
    Navigate to `/main/:id` to access the form for creating a new post.

4. **Edit a blog post**:
    Navigate to `/main/:id/edit` to access the form for editing a specific post.

5. **Delete a blog post**:
    You can delete a post directly from the list of posts.

## Routes

- `GET /main` - Display all blog posts.
- `GET /main/:id` - Display the form for creating a new blog post.
- `POST /main` - Create a new blog post.
- `GET /main/:id/edit` - Display the form for editing a blog post.
- `PUT /main/:id` - Update an existing blog post.
- `DELETE /main/:id` - Delete a blog post.

## Technologies

- **Node.js** - JavaScript runtime
- **Express** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling tool
- **EJS** - Templating engine

## Contributing

1. **Fork the repository**.
2. **Create a new branch**:
    ```sh
    git checkout -b feature/your-feature-name
    ```
3. **Commit your changes**:
    ```sh
    git commit -m 'Add some feature'
    ```
4. **Push to the branch**:
    ```sh
    git push origin feature/your-feature-name
    ```
5. **Open a pull request**.
