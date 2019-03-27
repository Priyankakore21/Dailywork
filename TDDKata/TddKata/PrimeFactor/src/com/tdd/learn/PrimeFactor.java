package com.tdd.learn;

import java.util.ArrayList;
import java.util.*;

public class PrimeFactor implements FindFactors {

	@Override
	public List<Integer> getFactors(int number) {
		// TODO Auto-generated method stub

		List<Integer> pFactor = new ArrayList<Integer>();

		if (number == 1)

			return null;

		/*
		 * else if(number==2) pFactor.add(2);
		 * 
		 * else { if(number==3) pFactor.add(3); }
		 */
		else {

			for (int fact = 2; number > 1;) {
				if (number % fact == 0) {
					pFactor.add(fact);
					number = number / fact;

				} else
					fact++;
			}
		}

		if (number > 1) {
			pFactor.add(number);
		}

		return pFactor;
	}

}
