package com.example.demo.worker;

import com.example.demo.user.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "worker")
public class WorkerController {

    private final WorkerService workerService;

    @Autowired
    public WorkerController(WorkerService workerService) {
        this.workerService = workerService;
    }

    @GetMapping
    public List<Worker> getWorkers(){
        return workerService.getWorkers();
    }

    @GetMapping("{id}")
    public Worker getWorker(@PathVariable String id){
        return workerService.getWorker(id);
    }

    @PostMapping
    public Worker addWorker(@RequestBody Form form){
        return workerService.addWorker(form.getWorker(), form.getCategory_id());
    }

    @PutMapping("/{id}")
    public void updateWorker(@PathVariable String id, @RequestBody Form form){
        workerService.updateWorker(id,form.getWorker(), form.getCategory_id() );
    }
}

class Form{
    private Worker worker;
    private Integer category_id;

    public Form(Worker worker, Integer category_id) {
        this.worker = worker;
        this.category_id = category_id;
    }

    public Worker getWorker() {
        return worker;
    }

    public Integer getCategory_id() {
        return category_id;
    }
}
