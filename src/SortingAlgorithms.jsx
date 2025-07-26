export async function InsertionSort(arr1, setArr, speed,start) {
  let arr = [...arr1];
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j--;
      setArr([...arr]);
      await new Promise((r) => setTimeout(r, 1000 / speed));
      if(start.current) return;
    }
    arr[j + 1] = temp;
    setArr([...arr]);
    await new Promise((r) => setTimeout(r, 1000 / speed));
  }
}

export async function BubbleSort(arr1, setArr, speed,start) {
  let arr = [...arr1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        setArr([...arr]);
        await new Promise((r) => setTimeout(r, 1000 / speed));
        if(start.current) return;
      }
    }
  }
}

export async function SelectionSort(arr1, setArr, speed,start) {
  let arr = [...arr1];
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
      if(start.current) return;
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
    setArr([...arr]);
    await new Promise((r) => setTimeout(r, 1000 / speed));
    if(start.current) return;
  }
}

export async function MergeSort(arr1, setArr, speed,startBtn) {
  let arr = [...arr1];
  async function mergeSortHelper(start, end) {
    if (start >= end) return;
    const mid = Math.floor((start + end) / 2);
    if(startBtn.current) return;
    await mergeSortHelper(start, mid);
    if(startBtn.current) return;
    await mergeSortHelper(mid + 1, end);
    if(startBtn.current) return;
    let merged = [];
    let left = start,
      right = mid + 1;
    while (left <= mid && right <= end) {
      if (arr[left] < arr[right]) {
        merged.push(arr[left++]);
      } else {
        merged.push(arr[right++]);
      }
      if(startBtn.current) return;
    }
    while (left <= mid) merged.push(arr[left++]);
    if(startBtn.current) return;
    while (right <= end) merged.push(arr[right++]);
    if(startBtn.current) return;
    for (let i = 0; i < merged.length; i++) {
      arr[start + i] = merged[i];
      setArr([...arr]);
      await new Promise((r) => setTimeout(r, 1000 / speed));
      if(startBtn.current) return;
    }
    if(startBtn.current) return;
  }
  if(startBtn.current) return;
  await mergeSortHelper(0, arr.length - 1);
  if(startBtn.current) return;
}

export async function QuickSort(arr1, setArr, speed,start) {
  let arr = [...arr1];
  async function quickSortHelper(low, high) {
    if (low < high) {
      let p = await partition(low, high);
      await quickSortHelper(low, p - 1);
      await quickSortHelper(p + 1, high);
    }
  }
  async function partition(low, high) {
    let pivot = arr[high];
    let i = low;
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
        setArr([...arr]);
        await new Promise((r) => setTimeout(r, 1000 / speed));
        if(start.current) return;
        i++;
      }
    }
    [arr[i], arr[high]] = [arr[high], arr[i]];
    setArr([...arr]);
    await new Promise((r) => setTimeout(r, 1000 / speed));
    return i;
  }
  await quickSortHelper(0, arr.length - 1);
}

export async function HeapSort(arr1, setArr, speed,start) {
  let arr = [...arr1];
  let n = arr.length;
  async function heapify(n, i) {
    let largest = i;
    let l = 2 * i + 1;
    let r = 2 * i + 2;
    if (l < n && arr[l] > arr[largest]) largest = l;
    if (r < n && arr[r] > arr[largest]) largest = r;
    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      setArr([...arr]);
      await new Promise((r) => setTimeout(r, 1000 / speed));
      if(start.current) return;
      await heapify(n, largest);
    }
  }
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    await heapify(n, i);
    if(start.current) return;
  }
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    setArr([...arr]);
    await new Promise((r) => setTimeout(r, 1000 / speed));
    if(start.current) return;
    await heapify(i, 0);
  }
}
