package com.example.demo.offer;

import com.example.demo.category.Category;
import com.example.demo.post.Post;
import com.example.demo.worker.Worker;

import javax.persistence.*;

@Entity
@Table(name = "offer")
public class Offer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int offer_id;
    private double offer_price;
    private String offer_status;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    private Worker worker;
    @ManyToOne(fetch = FetchType.EAGER, optional = true)
    private Post post;

    public Offer() {
    }

    public Offer(int offer_id, double offer_price, String offer_status, Worker worker, Post post) {
        this.offer_id = offer_id;
        this.offer_price = offer_price;
        this.offer_status = offer_status;
        this.worker = worker;
        this.post = post;
    }

    public int getOffer_id() {
        return offer_id;
    }

    public void setOffer_id(int offer_id) {
        this.offer_id = offer_id;
    }

    public double getOffer_price() {
        return offer_price;
    }

    public void setOffer_price(double offer_price) {
        this.offer_price = offer_price;
    }

    public String getOffer_status() {
        return offer_status;
    }

    public void setOffer_status(String offer_status) {
        this.offer_status = offer_status;
    }

    public Worker getWorker() {
        return worker;
    }

    public void setWorker(Worker worker) {
        this.worker = worker;
    }

    public Post getPost() {
        return post;
    }

    public void setPost(Post post) {
        this.post = post;
    }

    @Override
    public String toString() {
        return "Offer{" +
                "offer_id=" + offer_id +
                ", offer_price=" + offer_price +
                ", offer_status='" + offer_status + '\'' +
                ", worker=" + worker +
                ", post=" + post +
                '}';
    }
}
