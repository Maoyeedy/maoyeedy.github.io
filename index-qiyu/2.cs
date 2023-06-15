using System;
using System.Collections;
using TMPro;
using UnityEngine;

public class DialogPlayer : MonoBehaviour
{
    public Dialog[] dialogs;
    public TextMeshProUGUI dialogText, nameText;
    public float characterInterval = 0.05f, autoNextLineTime = 2.5f;
    private float _elapsedTime;
    private int _index;

    private void Start()
    {
        dialogText.text = string.Empty;
        nameText.text = string.Empty;
        StartCoroutine(TypeLine());
    }

    private void Update()
    {
        _elapsedTime += Time.deltaTime;
        if (Input.GetMouseButtonDown(0) || Input.GetKeyDown(KeyCode.Return) || _elapsedTime > autoNextLineTime) SwitchLine();
    }

    private void SwitchLine()
    {
         _elapsedTime = 0;
        if (dialogText.text == dialogs[_index].dialog)
        {
            NextLine();
        }
        else
        {
            StopAllCoroutines();
            dialogText.text = dialogs[_index].dialog;
        }
    }

    private void NextLine()
    {
        dialogText.text = string.Empty;
        if (_index < dialogs.Length - 1)
        {
            _index++;
            StartCoroutine(TypeLine());
            nameText.text = dialogs[_index].name;
        }
        else
        {
            gameObject.SetActive(false);
        }
    }

    private IEnumerator TypeLine()
    {
        foreach (char x in dialogs[_index].dialog)
        {
            dialogText.text += x;
            yield return new WaitForSeconds(characterInterval);
        }
    }

    [Serializable]
    public struct Dialog
    {
        public string name;
        public string dialog;
    }
}
