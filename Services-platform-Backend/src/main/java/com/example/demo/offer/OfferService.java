package com.example.demo.offer;

import com.example.demo.category.Category;
import com.example.demo.post.Post;
import com.example.demo.post.PostRepository;
import com.example.demo.user.User;
import com.example.demo.worker.Worker;
import com.example.demo.worker.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfferService {

    private final OfferRepository offerRepository;
    private final WorkerRepository workerRepository;
    private final PostRepository postRepository;

    @Autowired
    public OfferService(OfferRepository offerRepository, WorkerRepository workerRepository, PostRepository postRepository) {
        this.offerRepository = offerRepository;
        this.workerRepository = workerRepository;
        this.postRepository = postRepository;
    }

    public List<Offer> getOffers() {
        return offerRepository.findAll();
    }

    public Offer getOffer(String id) {
        Integer offer_id = Integer.parseInt(id);
        return offerRepository.findById(offer_id).orElse(null);
    }

    public Offer addOffer(Offer offer, Integer worker_id, Integer post_id) {
        Worker worker = workerRepository.findById(worker_id).orElse(null);
        Post post = postRepository.findById(post_id).orElse(null);
        offer.setWorker(worker);
        offer.setPost(post);
        return offerRepository.save(offer);
    }

    public void deleteOffer(String id) {
        Integer offer_id = Integer.parseInt(id);
        offerRepository.deleteById(offer_id);
    }
}
