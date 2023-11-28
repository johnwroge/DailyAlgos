

def kthGrammar( n: int, k: int) -> int:
    n_rows = ["0"]
    for i in range(n):
        curr = n_rows[i]
        new_row = "" 
        for char in curr:
            if char == "0":
                new_row += "01"
            elif char == "1":
                new_row += "10"
        n_rows.append(new_row)
    print(n_rows)
    return
    # return n_rows[n - 1][k - 1]

'0', '01', 
'0110', 
'01101001', 
'0110100110010110',
'01101001100101101001011001101001',
'0110100110010110100101100110100110010110011010010110100110010110']

print(kthGrammar(6,0))