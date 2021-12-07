const onclickAdd = () => {
  // テキストボックスの値を取得
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

/**
 * 未完了リストから指定の要素を削除
 * @param {*} target
 */
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

/**
 * 戻すボタンの処理
 */
const createIncompleteList = (text) => {
  // 要素の作成
  const li = document.createElement("li");
  const div = document.createElement("div");
  const p = document.createElement("p");

  // 完了ボタン
  const completeButton = document.createElement("button");
  completeButton.innerHTML = "完了";
  completeButton.addEventListener("click", () => {
    // 移動対象のアイテムを取得
    const moveTargetLi = completeButton.closest("li");
    //const moveTarget = completeButton.closest("div");

    // 戻すボタン
    const revertButton = document.createElement("button");
    revertButton.innerHTML = "戻す";
    revertButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTargetLi = revertButton.closest("li");
      const deleteTarget = revertButton.closest("div");
      document.getElementById("complete-list").removeChild(deleteTargetLi);
      createIncompleteList(deleteTarget.firstElementChild.innerText);
    });

    const moveLi = document.createElement("li");
    const moveDiv = document.createElement("div");
    const moveP = document.createElement("p");

    // // クラス名をセット
    moveDiv.className = "list-row";

    // pタグ内に表示する値をセット。
    moveP.innerHTML = text;

    moveDiv.appendChild(moveP);
    moveDiv.appendChild(revertButton);
    moveLi.appendChild(moveDiv);
    console.log(moveLi);
    // 完了リストへ
    document.getElementById("complete-list").appendChild(moveLi);

    // 押された完了ボタンの親タグを未完了リストから削除
    deleteFromIncompleteList(moveTargetLi);
  });

  // 削除ボタン
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグを未完了リストから削除
    // 親要素をたどり()内で指定した一番近い要素を求める
    deleteFromIncompleteList(deleteButton.closest("li"));
  });

  // クラス名をセット
  div.className = "list-row";

  // pタグ内に表示する値をセット。
  p.innerHTML = text;

  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  li.appendChild(div);

  // // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onclickAdd());
