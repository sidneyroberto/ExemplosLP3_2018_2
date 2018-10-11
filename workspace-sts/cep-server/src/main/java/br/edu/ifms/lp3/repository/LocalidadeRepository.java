package br.edu.ifms.lp3.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.edu.ifms.lp3.model.Localidade;

/**
 * Repositório de Localidade
 * @author Sidney Sousa
 *
 */
@Repository
public interface LocalidadeRepository extends JpaRepository<Localidade, Long> {

	/**
	 * Recupera as localidades pelo CEP.
	 * @param cep O CEP das localidades a serem consultadas.
	 * @return Uma lista com as localidades encontradas.
	 */
	List<Localidade> findByCep(String cep);
	
	/**
	 * Recupera as localidades pelo logradouro.
	 * @param logradouro O logradouro ou parte do nome do logradouro da localidade procurada.
	 * @return Uma lista com as localidades encontradas.
	 */
	List<Localidade> findByLogradouroIgnoreCaseContaining(String logradouro);
	
	Page<Localidade> findAllByOrderByLogradouroDesc(Pageable pagina);
}
