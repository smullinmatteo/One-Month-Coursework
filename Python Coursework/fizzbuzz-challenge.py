#fizzbuzz challenge

fizzbuzz_list = [i if (i % 3 != 0 and i % 5 != 0) else "FizzBuzz" if i % 3 == 0 and i % 5 == 0 else "Fizz" if i %3 != 0 else "Buzz" if i % 5 != 0 else i for i in range(101) ]
print (fizzbuzz_list)


# [the_expr_when_if_is_true if condition else new_comprehension]
# [the_expr_when_if_is_true if condition else the_expr_when_if_is_true if condition else the_expr_when_if_is_false for elem in list]
# [the_expr_when_if_is_true if condition else the_expr_when_if_is_false for elem in list]