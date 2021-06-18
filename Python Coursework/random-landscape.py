#random selects a couple vegetations for a random landscape design. 

import random

shrubs = ["Azalea",
        "Escallonia",
        "Mahonia",
        "Privet",
        "Barberry"]

trees = ["Maple",
          "Aspen",
          "Oak",
          "Elm",
          "Ornamental Cherry",
          "Tupelo"]

groundcover = ["kinnikinnick",
				"sorrel",
				"purple lily"]




print(f"How about you plant a single {random.choice(trees)} with a couple {random.choice(shrubs)} around it and then fill in the voids with {random.choice(groundcover)}")
