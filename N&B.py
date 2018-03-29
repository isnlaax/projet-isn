

# -*- coding: cp1252 -*-
#  fonction teinte de gris
label = "Teinte de gris"
ordinal = 5

def modify(pic):
    for row in range(pic.height()):        	#*******boucle permettant d?examiner ligne apr?s ligne*************
        for col in range(pic.width()):       	#*******boucle permettant d?examiner chaque point de la ligne****
       	    p = pic.idat[row][col]	#*** la fonction range(x) cr?e un liste de nombres entiers de x valeurs de 0 ? (x-1)
            	#*******[0,1,2,????.,x-1]
            p.r = (p.r+p.g+p.b)/3	#*******la fonction min(x,y) renvoie la valeur la plus petite entre x, y
            p.g = (p.r+p.g+p.b)/3	#********traitement affect? ? chaque point******
            p.b = (p.r+p.g+p.b)/3
