package com.tdd.learn;

import static org.junit.jupiter.api.Assertions.*;

import java.util.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;

class PrimeFactorTest {

	 PrimeFactor classToTest;
	 public List<Integer> getFactors(int... number)
	 {
	 List<Integer> pFactor= new ArrayList<Integer>();
	 /*pFactor.add(number);
	  * return pFactor;
	  * 
	  */
	 for(int numbers:number)
	 {
		pFactor.add(numbers);
		numbers++;
	 }
	return pFactor;
}
	@BeforeEach
	void setUp() throws Exception {
		
		classToTest =new PrimeFactor();
	}

	@Test
	void getFactorsTest01() {
		assertEquals(null,classToTest.getFactors(1));		
	}
	

	@Test
	void getFactorsTest02() {
		assertEquals(getFactors(2),classToTest.getFactors(2));		
	}
	
	@Test
	void getFactorsTest03() {
		assertEquals(getFactors(3),classToTest.getFactors(3));		
	}
	
	@Test
	void getFactorsTest04() {
		assertEquals(getFactors(2,2),classToTest.getFactors(4));		
	}
	
	@Test
	void getFactorsTest05() {
		assertEquals(getFactors(2,2,2),classToTest.getFactors(8));		
	}
	
	@Test
	void getFactorsTest06() {
		assertEquals(getFactors(3,3),classToTest.getFactors(9));		
	}
	
	@Test
	void getFactorsTest07() {
		assertEquals(getFactors(3,3,3,47),classToTest.getFactors(1269));		
	}
}
