class profilePage():

	def __init__(self,userName,email):
		self.userName=userName
		self.email=email



database=[{'userName':'martin','email':'martin@yahoo.com'},{'userName':'eriny','email':'eriny@yahoo.com'}]

def createProfilePage(data):
	profile=profilePage(data['userName'], data['email'])
	return profile


data=database[1]
eriny=createProfilePage(data)
print(eriny.email)