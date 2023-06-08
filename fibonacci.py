num0 = 0
num1 = 0
def fib(n):
    global num0
    global num1
    if(n==0):
        num0+=1
        return 0
    elif(n==1):
        num1+=1
        return 1
    else:
        return fib(n-1)+fib(n-2)
num=int(input())
for i in range(num) :
    n=int(input())
    num0 = 0
    num1 = 0
    fib(n)
    print(num0,num1)
