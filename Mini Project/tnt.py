def f(x, y):
    return x * y**2

def rk4(f, x0, y0, h, n):
    x = x0
    y = y0
    for i in range(n):
        k1 = h * f(x, y)
        k2 = h * f(x + 0.5 * h, y + 0.5 * k1)
        k3 = h * f(x + 0.5 * h, y + 0.5 * k2)
        k4 = h * f(x + h, y + k3)
        y += (k1 + 2 * k2 + 2 * k3 + k4) / 6
        x += h
    return y

x0 = 0
y0 = 1
h = 0.1
n = 10  # Number of steps
y_numerical = rk4(f, x0, y0, h, n)
print(f"Numerical solution at x = {x0 + n * h}: {y_numerical}")