#!/usr/bin/env node


// Here, we are creating an ArrayBuffer of size 16 bytes.
// An ArrayBuffer is a fixed-length binary data buffer that can be used to store arbitrary data.
let bufffer = new ArrayBuffer(16)

// We are creating two DataView objects, dv1 and dv2. 
// A DataView is a typed array-like object which allows us to read and write multiple number types in a binary data buffer.
let dv1 = new DataView(bufffer)
//let dataView = new DataView(buffer, byteOffset, byteLength);
// The first argument is the ArrayBuffer that the DataView object is based on.
// The second argument is the offset in the ArrayBuffer where the DataView object starts.
// The third argument is the length of the DataView object.
let dv2 = new DataView(bufffer, 10, 3)

// We are setting the values of the ArrayBuffer at the indices 11 and 12 using the setInt8 method of the DataView object.
// The setInt8 method sets the value of an 8-bit signed integer at the specified byte offset.
dv1.setInt8(11, 41)
dv1.setInt8(12, 42)

// We are getting the values of the ArrayBuffer at the indices 1 and 2 using the getInt8 method of the DataView object.
// The getInt8 method returns the value of an 8-bit signed integer at the specified byte offset.
let num = dv2.getInt8(1)
let num2 = dv1.getInt8(12)

// Finally, we are logging the values of num and num2 to the console.
console.log(num)
console.log(num2)
