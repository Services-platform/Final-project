package com.example.demo.offer;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("offer")
@CrossOrigin("*")
public class OfferController {

    private final OfferService offerService;

    @Autowired
    public OfferController(OfferService offerService) {
        this.offerService = offerService;
    }

    @GetMapping
    public List<Offer> getOffers(){
        return offerService.getOffers();
    }

    @GetMapping("{id}")
    public Offer getOffer(@PathVariable String id){
        return offerService.getOffer(id);
    }

    @PostMapping
    public Offer addOffer(@RequestBody Form form){
        return offerService.addOffer(form.getOffer(), form.getWorker_id(), form.getPost_id());
    }

    @DeleteMapping("{id}")
    public void deleteOffer(@PathVariable String id){
        offerService.deleteOffer(id);
    }

}

class Form{
    private Offer offer;
    private Integer worker_id;
    private Integer post_id;

    public Form(Offer offer, Integer worker_id, Integer post_id) {
        this.offer = offer;
        this.worker_id = worker_id;
        this.post_id = post_id;
    }

    public Offer getOffer() {
        return offer;
    }

    public Integer getWorker_id() {
        return worker_id;
    }

    public Integer getPost_id() {
        return post_id;
    }
}
