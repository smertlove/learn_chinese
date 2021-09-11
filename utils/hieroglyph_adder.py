import tkinter as tk


def gey_new_hieroglyph(hieroglyph, translation, pinyin, lesson):
    x = "{"
    y = "}"
    return f'''\r,
{x}
    "hieroglyph": "{hieroglyph}",
    "translation": "{translation}",
    "pinyin": "{pinyin}",
    "lesson": {lesson}
{y}
'''



def action():
    if ent5.get() == 'h':
        filename = '../heiroglyphs.js'
    elif ent5.get() == 'k':
        filename = '../keys.js'
    file = open(filename, 'r', encoding = 'utf-8')
    arr = file.read()
    arr = arr[:-1] + gey_new_hieroglyph(ent1.get(), ent2.get(), ent3.get(), ent4.get()) + arr[-1]
    file.close()
    file = open(filename, 'w', encoding = 'utf-8')
    file.write(arr)
    file.close()





root = tk.Tk()
root.title('hieroglyph_adder')
root.geometry('300x370+150+150')
root.resizable(False, False)

lbl1 = tk.Label(text = 'hieroglyph', font = ('Arial', 18))
ent1 = tk.Entry(width = 10, font = ('Arial', 18))
lbl2 = tk.Label(text = 'translation', font = ('Arial', 18))
ent2 = tk.Entry(width = 10, font = ('Arial', 18))
lbl3 = tk.Label(text = 'pinyin', font = ('Arial', 18))
ent3 = tk.Entry(width = 10, font = ('Arial', 18))
lbl4 = tk.Label(text = 'lesson', font = ('Arial', 18))
ent4 = tk.Entry(width = 10, font = ('Arial', 18))
lbl5 = tk.Label(text = 'key/hieroglyph', font = ('Arial', 18))
ent5 = tk.Entry(width = 10, font = ('Arial', 18))
OKbtn = tk.Button(text = 'OK', command = action, font = ('Arial', 18))


elements = (lbl1, ent1, lbl2, ent2, lbl3, ent3, lbl4, ent4, lbl5, ent5, OKbtn)
for e in elements:
    e.pack()

root.mainloop()
