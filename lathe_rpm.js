function calculate() {
    // 取得輸入數值
    const D = parseFloat(document.getElementById("diameter").value);
    const N = parseFloat(document.getElementById("spindleSpeed").value);
    const F = parseFloat(document.getElementById("feedPerRev").value);
    const AP = parseFloat(document.getElementById("cutDepth").value);
    const L = parseFloat(document.getElementById("length").value);
    const R = parseFloat(document.getElementById("noseRadius").value); // 刀鼻R角從下拉選單取得
    
    // 1. 計算切削速度 VC = (π * D * N) / 1000 (m/min)
    const VC = (Math.PI * D * N) / 1000;
    
    // 2. 計算週進給速率 Vf = F * N (mm/min)
    const Vf = F * N;
    
    // 3. 預估表面粗糙度 DM1 = F^2 / (8 * R) (mm)
    const DM1 = (F * F) / (8 * R);
    // 換算成 μm
    const DM1um = DM1 * 1000;
    
    // 4. 加工時間 T = L / Vf (分鐘)
    const T = L / Vf;
    
    // 顯示結果
    document.getElementById("VC").textContent = VC.toFixed(2);
    document.getElementById("Vf").textContent = Vf.toFixed(2);
    document.getElementById("DM1").textContent = DM1.toFixed(4);
    document.getElementById("DM1um").textContent = DM1um.toFixed(2);
    document.getElementById("T").textContent = T.toFixed(2);
  }