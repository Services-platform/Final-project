package com.example.demo.post;

import com.example.demo.category.Category;
import com.example.demo.offer.Offer;
import com.example.demo.user.User;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "post")
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int post_id;
    private String title;
    private String description;
    private String image;
    private String city;
    private String status;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    private Category category;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    private User user;
    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Offer> offers;


    public Post() {
    }

    public Post(int post_id, String title, String description, String image, String city, String status, Category category, User user) {
        this.post_id = post_id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.city = city;
        this.status = status;
        this.category = category;
        this.user = user;
    }

    public int getPost_id() {
        return post_id;
    }

    public void setPost_id(int post_id) {
        this.post_id = post_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @Override
    public String toString() {
        return "Post{" +
                "post_id=" + post_id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", image='" + image + '\'' +
                ", city='" + city + '\'' +
                ", status='" + status + '\'' +
                ", category=" + category +
                ", user=" + user +
                '}';
    }
}
