package com.studentTracker.studenttracker.bitcoin.blockchainexplore;

import java.util.List;

import info.blockchain.api.wallet.*;
import info.blockchain.api.wallet.entity.Address;
import info.blockchain.api.wallet.entity.CreateWalletResponse;
import info.blockchain.api.wallet.entity.PaymentResponse;
public class WalletDemo {

	public static void main(String[] args) throws Exception {
		 CreateWalletResponse wallet = Wallet.create(
	        	    "http://localhost:3000/",
	        	    "YOUR_SUPER_SECURE_PASSWORD",
	        	    "YOUR_API_CODE");
	    
	        System.out.println(wallet.getIdentifier());
	        	
	    	Wallet wallet1 = new Wallet(
	    	        "http://localhost:3000/",
	    	        "YOU_API_CODE",
	    	        "YOUR_GUID",
	    	        "YOUR_SUPER_SECURE_PASSWORD");

	    	// get an address from your wallet and include only transactions with up to 3
	    	// confirmations in the balance
	    	Address addr = wallet1.getAddress("1JzSZFs2DQke2B3S4pBxaNaMzzVZaG4Cqh");
	    //	Address addr = wallet.getAddress();
	    	
	    	System.out.println(String.format("The balance is %s", addr.getBalance()));

	    	// send 0.2 bitcoins with a custom fee of 0.01 BTC and a note
	        // public notes require a minimum transaction size of 0.005 BTC
	    	PaymentResponse payment = wallet1.send("1dice6YgEVBf88erBFra9BHf6ZMoyvG88", 20000000L, null, 1000000L);
	    	System.out.println(String.format("The payment TX hash is %s", payment.getTxHash()));

	    	long totalBalance = wallet1.getBalance();
	    	System.out.println(String.format("The total wallet balance is %s", totalBalance));

	    	// list all addresses and their balances 
	    	List<Address> addresses = wallet1.listAddresses();
	    	for (Address a : addresses)
	    	{
	    		System.out.println(String.format("The address %s has a balance of %s satoshi",
	    				a.getAddress(), a.getBalance()));
	    	}

	    	// archive an old address
	    	wallet1.archiveAddress("1JzSZFs2DQke2B3S4pBxaNaMzzVZaG4Cqh");

	    	// create a new address and attach a label to it
	    	Address newAddr = wallet1.newAddress("test label 123");
	    	System.out.println(String.format("The new address is %s", newAddr.getAddress()));

	}

}
