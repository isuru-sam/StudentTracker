package com.studentTracker.studenttracker.bitcoin.blockchainexplore;

import java.math.BigDecimal;
import java.util.Map;

import info.blockchain.api.exchangerates.Currency;
import info.blockchain.api.exchangerates.ExchangeRates;

public class ExchangeRatesDemo {

	public static void main(String[] args) throws Exception {
		 ExchangeRates exchange = new ExchangeRates();
	        
			// get the ticker map
	        Map<String, Currency> ticker = exchange.getTicker();
	        BigDecimal BTCUSDsell = ticker.get("USD").getSell();
System.out.println(BTCUSDsell);
	        // convert 5362 EUR to BTC
	        BigDecimal EURToBTC = exchange.toBTC("EUR", new BigDecimal(53620));
	        System.out.println(EURToBTC);
	        // convert 100,000,000 satoshi to USD
	    //    BigDecimal BTCToUSD = exchange.toFiat("USD", new BigDecimal(1000));
	      //  System.out.println(BTCToUSD);
	}

}
