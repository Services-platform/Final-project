package com.example.demo.worker;

import com.example.demo.category.Category;
import com.example.demo.user.User;

import javax.persistence.*;

@Entity
@Table(name = "worker")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String speciality;
    private int rating;
    @ManyToOne(fetch = FetchType.EAGER,optional = true)
    private User user;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    private Category category;

    public Worker() {
    }

    public Worker(int worker_id, String speciality, int rating, Category category, User user) {
        this.id = worker_id;
        this.speciality = speciality;
        this.rating = rating;
        this.category = category;
        this.user = user;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
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
        return "Worker{" +
                "id=" + id +
                ", speciality='" + speciality + '\'' +
                ", rating=" + rating +
                ", user=" + user +
                ", category=" + category +
                '}';
    }
}
