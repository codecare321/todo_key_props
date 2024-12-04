# key props

```
React tell that you have list of item
when you render react will mount then

then what React tell is that list of item have interesting fact is that everyitem list of item is not going to change.

if all list change all old component need to be unmount 
item need to be remount 

if your list mostly not change or remove one of them 

dom tree  add node remove node for small task very expensive


React tell you have list of items

item 1
item 2
item 3 

mostly case set of item delete or add

then react ask help from us that tell me 
what is the unique identifier of your list

this set of unique identifier we tell key props

i will use unique identifier when re render when new list come does this all remove the list or it going to change data for specific id or delete or add 

react will help in re render between it will find old data and new data which one is same it will not unmount.


Items having having same key prop will not unmount.

Myth:
react key props helps to stop re render for list 

right:
re render will be going to happend but the data will unmount or not it will be decide by key props 


when you check in inspect profiler it will show all list will be re render



many people right in map list key props list index we write.

.map(item,index)
key = index


what is the problem here

[a,b,c,d,e,f]

in this list we convert
adding at last

[a,b,c,d,e,f,g]

in this indexing will never change


[g,a,b,c,d,e,f,g]
1 case
when you add element as first index of all element will  be change

now element has no unique ness 
2 case
when you sort re arragment [b,g,f,c ,d ,e,a]


in this 2 case index is not good a key

that why people suggest not to use index

then solution is you have to do backend part that you got id from backend or you have to think hard for doing this implementation

todos.filter((todo) => todo.id !== id)

jo condition true nahi bethi us item ko remove kardeta hai

wo vale element jinki id mere given id k barabar nahi hai 
wo items rakho

but jiski id humari given id k barabar hai usko remove kardo



```
