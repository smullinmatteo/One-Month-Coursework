import emoji

answer = input("Do you want to hear a joke").lower().strip()

if "y" in answer.lower():
	print("In Soviet Russia gun find you.")
elif "n" in answer.lower():
	print("Fine. Be that way.")
else:
	print ("...waaat")
	print (emoji.emojize(":expressionless_face:"))