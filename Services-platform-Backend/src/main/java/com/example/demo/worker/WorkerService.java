package com.example.demo.worker;

import com.example.demo.category.Category;
import com.example.demo.category.CategoryRepository;
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
}
