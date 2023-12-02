package books

type Book struct {
    ID string `json:"id,omitempty"`
    Author string `json:"author"`
    Title string `json:"title"`
    Content string `json:"content"`
    Markdown string `json:"markdown"`
}

