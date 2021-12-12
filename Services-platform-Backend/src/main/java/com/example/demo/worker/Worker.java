package com.example.demo.worker;

import com.example.demo.category.Category;

import javax.persistence.*;

@Entity
@Table(name = "worker")
public class Worker {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int worker_id;
    private String worker_name;
    private String email;
    private int phone;
    private String speciality;
    private String password;
    private int rating;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    private Category category;

    public Worker() {
    }

    public Worker(int worker_id, String worker_name, String email, int phone, String speciality, String password, int rating, Category category) {
        this.worker_id = worker_id;
        this.worker_name = worker_name;
        this.email = email;
        this.phone = phone;
        this.speciality = speciality;
        this.password = password;
        this.rating = rating;
        this.category = category;
    }

    public int getWorker_id() {
        return worker_id;
    }

    public void setWorker_id(int worker_id) {
        this.worker_id = worker_id;
    }

    public String getWorker_name() {
        return worker_name;
    }

    public void setWorker_name(String worker_name) {
        this.worker_name = worker_name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public int getPhone() {
        return phone;
    }

    public void setPhone(int phone) {
        this.phone = phone;
    }

    public String getSpeciality() {
        return speciality;
    }

    public void setSpeciality(String speciality) {
        this.speciality = speciality;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    @Override
    public String toString() {
        return "Worker{" +
                "worker_id=" + worker_id +
                ", worker_name='" + worker_name + '\'' +
                ", email='" + email + '\'' +
                ", phone=" + phone +
                ", speciality='" + speciality + '\'' +
                ", password='" + password + '\'' +
                ", rating=" + rating +
                ", category=" + category +
                '}';
    }
}
