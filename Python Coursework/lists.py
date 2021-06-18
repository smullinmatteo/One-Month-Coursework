the_count = [1, 2, 3, 4, 6]
stocks = ["AAPL", "GOOG", "TSLA"]
random_things = ["Puppies", 55, "Anthony Weiner", 1/2, ["Oh no", "A list inside a list"]]

# we can also build lists, first let's start with an empty one
people = []

people.append("Mattan")
people.append("Sarah")
people.append("Chris")

# now we can print them out too
print(people)

# and remove some
people.remove("Sarah")
print(people)

print([i**2 for i in range(11)])
