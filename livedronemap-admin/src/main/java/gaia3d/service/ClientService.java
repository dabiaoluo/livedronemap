package gaia3d.service;

import gaia3d.domain.Client;

public interface ClientService {

	/**
	 *  ID를 이용하여 client 정보 취득
	 *  @param client_id
	 *  @return
	 */
	Client getClient(int client_id);
	
	/**
	 * api key를 이용하여 client 정보를 취득
	 * @param api_key
	 * @return
	 */
	Client getClientByAPIKey(String api_key);
	
	/**
	 * client 등록
	 * @param client
	 * @return
	 */
	int insertClient(Client client);



}
