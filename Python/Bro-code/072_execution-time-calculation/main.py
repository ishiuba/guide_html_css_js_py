# HOW TO CALCULATE EXECUTION TIME IN PYTHON

import time

start_time = time.perf_counter()

for i in range(100000000):
    pass

end_time = time.perf_counter()

elapsed_time = end_time - start_time

print(f"elapsed time: {elapsed_time:.1f} seconds")