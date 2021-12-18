package com.example.demo.worker;

import com.example.demo.category.Category;
import com.example.demo.category.CategoryRepository;
import com.example.demo.user.User;
import com.example.demo.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class WorkerService {

    private final WorkerRepository workerRepository;
    private final UserRepository userRepository;
    private final CategoryRepository categoryRepository;

    @Autowired
    public WorkerService(WorkerRepository workerRepository, UserRepository userRepository, CategoryRepository categoryRepository) {
        this.workerRepository = workerRepository;
        this.userRepository = userRepository;
        this.categoryRepository = categoryRepository;
    }

    public List<Worker> getWorkers() {
        return workerRepository.findAll();
    }

    public Worker getWorker(String id) {
        Integer worker_id = Integer.parseInt(id);
        return workerRepository.findById(worker_id).orElse(null);
    }

    public Worker addWorker(Worker worker, Integer user_id,  Integer category_id) {
        User user = userRepository.findById(user_id).orElse(null);
        Category category = categoryRepository.findById(category_id).orElse(null);
        worker.setUser(user);
        worker.setCategory(category);
        return workerRepository.save(worker);
    }

    public void updateWorker(String id, Worker workerData, Integer user_id, Integer category_id) {
        Integer worker_id = Integer.parseInt(id);
        User user = userRepository.findById(user_id).orElse(null);
        Category category = categoryRepository.findById(category_id).orElse(null);
        Worker worker = workerRepository.findById(worker_id).orElse(null);
        if (worker != null && user != null && category != null){
            worker.setSpeciality(workerData.getSpeciality());
            worker.setRating(workerData.getRating());
            worker.setCategory(workerData.getCategory());
            worker.setUser(workerData.getUser());
            workerRepository.save(worker);
        }
    }
}
