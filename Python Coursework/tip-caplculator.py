#takes the bill amount from user and then suggests three bill+tip totals for 12,15, and %20 for the user

bill_amount = float(input("What is the bill total?").strip("$"))

print ((
	f"Here are your options: "
	f"12%: Tip ${bill_amount*.12:.2f} | Total ${bill_amount*1.12:.2f}, "
	f"15%: Tip ${bill_amount*.15:.2f} | Total ${bill_amount*1.15:.2f}, "
	f"20%: Tip ${bill_amount*.20:.2f} | Total ${bill_amount*1.20:.2f}"
	))