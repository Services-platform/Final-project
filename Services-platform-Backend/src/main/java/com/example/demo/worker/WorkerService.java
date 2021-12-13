package com.example.demo.worker;

import com.example.demo.category.Category;
import com.example.demo.category.CategoryRepository;
import com.example.demo.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerService {

    private final WorkerRepository workerRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public WorkerService(WorkerRepository workerRepository, CategoryRepository categoryRepository) {
        this.workerRepository = workerRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Worker> getWorkers() {
        return workerRepository.findAll();
    }

    public Worker getWorker(String id) {
        Integer worker_id = Integer.parseInt(id);
        return workerRepository.findById(worker_id).orElse(null);
    }

    public Worker addWorker(Worker worker, Integer category_id) {
        Category category = categoryRepository.findById(category_id).orElse(null);
        worker.setCategory(category);
        return workerRepository.save(worker);
    }

    public void updateWorker(String id, Worker workerData, Integer category_id) {
        Integer worker_id = Integer.parseInt(id);
        Category category = categoryRepository.findById(category_id).orElse(null);
        Worker worker = workerRepository.findById(worker_id).orElse(null);
        if (worker != null && category != null){
            worker.setWorker_name(workerData.getWorker_name());
            worker.setEmail(workerData.getEmail());
            worker.setPhone(workerData.getPhone());
            worker.setSpeciality(workerData.getSpeciality());
            worker.setPassword(workerData.getPassword());
            worker.setRating(workerData.getRating());
            worker.setCategory(workerData.getCategory());
            worker.setCategory(category);
            workerRepository.save(worker);
        }
    }
}
