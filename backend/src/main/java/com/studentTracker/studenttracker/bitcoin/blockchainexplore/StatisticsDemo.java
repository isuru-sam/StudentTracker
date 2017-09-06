package com.studentTracker.studenttracker.bitcoin.blockchainexplore;

import java.util.Map;

import info.blockchain.api.statistics.Chart;
import info.blockchain.api.statistics.Statistics;
import info.blockchain.api.statistics.StatisticsResponse;

public class StatisticsDemo {

	public static void main(String[] args) throws Exception{
Statistics statso = new Statistics();
        
    	StatisticsResponse stats = statso.getStats();
    	System.out.println(String.format("The current difficulty is %s. "
    			+ "The next retarget will happen in %s hours.",
    			stats.getDifficulty(),
    			(stats.getNextRetarget() - stats.getTotalBlocks()) * stats.getMinutesBetweenBlocks() / 60));
    			
        Chart txPerSec = statso.getChart("transactions-per-second", "5weeks", "8hours");
        
        Map<String, Integer> pools = statso.getPools("5weeks");

	}

}
