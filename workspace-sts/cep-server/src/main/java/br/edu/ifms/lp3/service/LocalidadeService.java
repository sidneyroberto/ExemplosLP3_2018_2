package br.edu.ifms.lp3.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.edu.ifms.lp3.model.Localidade;
import br.edu.ifms.lp3.repository.LocalidadeRepository;

@RestController
@RequestMapping("/localidade")
public class LocalidadeService {

	@Autowired
	private LocalidadeRepository repo;
	
	@GetMapping("/cep/{cepInformado}")
	public List<Localidade> recuperaLocalidadesPeloCep(@PathVariable("cepInformado") String cepInformado) {
		return repo.findByCep(cepInformado);
	}
	
	@GetMapping("/logradouro/{logradouroInformado}")
	public List<Localidade> 	recuperaLocalidadesPeloLogradouro(
			@PathVariable("logradouroInformado") 
			String logradouroInformado) {
		return repo.findByLogradouroIgnoreCaseContaining(logradouroInformado);
	}
}
