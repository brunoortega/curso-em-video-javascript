def fatorial(x):
   if x > 1:
    s = x*fatorial(x-1)
    return s
   if x == 1:
    return 1
   if x == 0:
    return 0

   

x = int(input('coloque o valor que deseja calcular o fatorial: '))
a = fatorial(x)
print('o fatorial de', x, 'é igual a ', a)

