// hash.js
async function __sha256(message) {
  const encoder = new TextEncoder();
  const data = encoder.encode(message);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

async function sha256() {
  const input = document.getElementById('input').value;
  const hash = await __sha256(input);
  document.getElementById('output').textContent = hash;
}

/*
<script>
  var hash;               // 1. 先声明

  (async () => {
    hash = await sha256('aaa');  // 2. 里面赋值
    console.log('内部:', hash);  // 3. 这里肯定有值
  })();
  
  // 4. 同步代码里立刻读 → 还是 undefined
  console.log('外部立即读:', hash);   // undefined
</script>
*/