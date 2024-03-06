import sys

def calculate(operation, first_num, second_num):

  # Perform operation
  if operation == "add":
    result = first_num + second_num 
  elif operation == "subtract":
    result = first_num - second_num
  elif operation == "multiply":
    result = first_num * second_num
  elif operation == "divide":
    result = first_num / second_num
  
  # Return result 
  return result

print("""  
Simple Calculator  
  
Usage: calculator.py [operation] [first number] [second number]
Operations: add, subtract, multiply, divide
""")

if len(sys.argv) != 4:
  print("3 arguments required") 
  sys.exit(1)
  
operation = sys.argv[1] 
first_num = float(sys.argv[2])
second_num = float(sys.argv[3]) 

result = calculate(operation, first_num, second_num)
print(result)