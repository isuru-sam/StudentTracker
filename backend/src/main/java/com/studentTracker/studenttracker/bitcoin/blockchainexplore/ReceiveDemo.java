package com.studentTracker.studenttracker.bitcoin.blockchainexplore;

import java.net.URLEncoder;

import info.blockchain.api.receive.CallbackLog;
import info.blockchain.api.receive.Receive;
import info.blockchain.api.receive.ReceiveResponse;

public class ReceiveDemo {

	public static void main(String[] args) throws Exception{
		   Receive receive = new Receive("YOUR_API_CODE");
	        
	    	ReceiveResponse response = receive.receive(
	    	        "xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8",
	    			URLEncoder.encode("https://your.url.com?secret=foo", "UTF-8"));

	    	System.out.println(String.format("The receiving address is %s. "
	    			+ "The address index is %d",
	    			response.getReceivingAddress(),
	    			response.getIndex()));
	    			
	    	int xpubGap = receive.checkGap("xpub661MyMwAqRbcFtXgS5sYJABqqG9YLmC4Q1Rdap9gSE8NqtwybGhePY2gZ29ESFjqJoCu1Rupje8YtGqsefD265TMg7usUDFdp6W1EGMcet8");
	    	CallbackLog cbLog = receive.getCallbackLog(URLEncoder.encode("https://your.url.com?secret=foo", "UTF-8"));

	}

}
