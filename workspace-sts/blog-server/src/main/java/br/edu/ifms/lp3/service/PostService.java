package br.edu.ifms.lp3.service;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifms.lp3.model.Post;
import br.edu.ifms.lp3.repository.PostRepository;

@RestController
@RequestMapping("/post")
public class PostService {

	@Autowired
	private PostRepository repo;
	
	@GetMapping
	public List<Post> recuperarTodos() {
		return repo.findByOrderByDataPostagemDesc();
	}
	
	@PostMapping
	public Post salvar(@RequestBody @Valid Post post) {
		return repo.save(post);
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@PutMapping
	public ResponseEntity atualizar(@RequestBody @Valid Post post) {
		Long id = post.getId();
		if (id == null) {
			return new ResponseEntity("id nulo", HttpStatus.BAD_REQUEST);
		}
		
		if (!repo.findById(id).isPresent()) {
			return new ResponseEntity("Post não encontrado", HttpStatus.NOT_FOUND);
		}
		post = repo.save(post);
		return new ResponseEntity(post, HttpStatus.OK);
	}
	
	@SuppressWarnings({ "unchecked", "rawtypes" })
	@DeleteMapping("/{id}")
	public ResponseEntity remove(@PathVariable("id") Long id) {
		Optional<Post> post = repo.findById(id);
		if (!post.isPresent()) {
			return new ResponseEntity("Post não encontrado", HttpStatus.NOT_FOUND);
		}
		repo.delete(post.get());
		return new ResponseEntity(id, HttpStatus.OK);
	}
}
