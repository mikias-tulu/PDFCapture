import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApiDocumentation() {
  return (
    <div className="backdrop-blur-md rounded-xl bg-white/30 border border-white/40 p-6 shadow-lg">
      <Tabs defaultValue="curl" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-6 bg-white/50">
          <TabsTrigger value="curl">cURL</TabsTrigger>
          <TabsTrigger value="node">Node.js</TabsTrigger>
          <TabsTrigger value="python">Python</TabsTrigger>
          <TabsTrigger value="php">PHP</TabsTrigger>
          <TabsTrigger value="go">Go</TabsTrigger>
        </TabsList>

        <TabsContent value="curl" className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white overflow-x-auto">
            <code>{`curl -X POST https://api.PDFCapture.com/v1/convert \\
  -H "Content-Type: application/json" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -d '{
    "url": "https://example.com",
    "pageSize": "A4",
    "orientation": "portrait",
    "scale": 1
  }'`}</code>
          </pre>
        </TabsContent>

        <TabsContent value="node" className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white overflow-x-auto">
            <code>{`const fetch = require('node-fetch');

async function convertPDFCapture() {
  const response = await fetch('https://api.PDFCapture.com/v1/convert', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer YOUR_API_KEY'
    },
    body: JSON.stringify({
      url: 'https://example.com',
      pageSize: 'A4',
      orientation: 'portrait',
      scale: 1
    })
  });

  const data = await response.json();
  console.log('PDF URL:', data.pdfUrl);
}

convertPDFCapture();`}</code>
          </pre>
        </TabsContent>

        <TabsContent value="python" className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white overflow-x-auto">
            <code>{`import requests

def convert_url_to_pdf():
    url = 'https://api.PDFCapture.com/v1/convert'
    headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_API_KEY'
    }
    payload = {
        'url': 'https://example.com',
        'pageSize': 'A4',
        'orientation': 'portrait',
        'scale': 1
    }
    
    response = requests.post(url, json=payload, headers=headers)
    data = response.json()
    print('PDF URL:', data['pdfUrl'])

convert_url_to_pdf()`}</code>
          </pre>
        </TabsContent>

        <TabsContent value="php" className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white overflow-x-auto">
            <code>{`<?php
function convertPDFCapture() {
    $url = 'https://api.PDFCapture.com/v1/convert';
    $payload = json_encode([
        'url' => 'https://example.com',
        'pageSize' => 'A4',
        'orientation' => 'portrait',
        'scale' => 1
    ]);
    
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
    curl_setopt($ch, CURLOPT_HTTPHEADER, [
        'Content-Type: application/json',
        'Authorization: Bearer YOUR_API_KEY'
    ]);
    
    $response = curl_exec($ch);
    curl_close($ch);
    
    $data = json_decode($response, true);
    echo 'PDF URL: ' . $data['pdfUrl'];
}

convertPDFCapture();
?>`}</code>
          </pre>
        </TabsContent>

        <TabsContent value="go" className="rounded-md bg-gray-900 p-4">
          <pre className="text-sm text-white overflow-x-auto">
            <code>{`package main

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io/ioutil"
	"net/http"
)

func main() {
	convertPDFCapture()
}

func convertPDFCapture() {
	url := "https://api.PDFCapture.com/v1/convert"
	
	payload := map[string]interface{}{
		"url":         "https://example.com",
		"pageSize":    "A4",
		"orientation": "portrait",
		"scale":       1,
	}
	
	payloadBytes, _ := json.Marshal(payload)
	req, _ := http.NewRequest("POST", url, bytes.NewBuffer(payloadBytes))
	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", "Bearer YOUR_API_KEY")
	
	client := &http.Client{}
	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()
	
	body, _ := ioutil.ReadAll(resp.Body)
	var data map[string]interface{}
	json.Unmarshal(body, &data)
	
	fmt.Println("PDF URL:", data["pdfUrl"])
}`}</code>
          </pre>
        </TabsContent>
      </Tabs>

      <div className="mt-8 space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">API Endpoints</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Endpoint</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Method</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/v1/convert</td>
                  <td className="border border-gray-300 px-4 py-2">POST</td>
                  <td className="border border-gray-300 px-4 py-2">Convert a URL to PDF</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/v1/batch</td>
                  <td className="border border-gray-300 px-4 py-2">POST</td>
                  <td className="border border-gray-300 px-4 py-2">Convert multiple URLs to PDFs</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">/v1/status/{"{id}"}</td>
                  <td className="border border-gray-300 px-4 py-2">GET</td>
                  <td className="border border-gray-300 px-4 py-2">Check conversion status</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Request Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Parameter</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Type</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Required</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">url</td>
                  <td className="border border-gray-300 px-4 py-2">string</td>
                  <td className="border border-gray-300 px-4 py-2">Yes</td>
                  <td className="border border-gray-300 px-4 py-2">The URL to convert to PDF</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">pageSize</td>
                  <td className="border border-gray-300 px-4 py-2">string</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Page size (A4, Letter, Legal, etc.)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">orientation</td>
                  <td className="border border-gray-300 px-4 py-2">string</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Page orientation (portrait, landscape)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2 font-mono text-sm">scale</td>
                  <td className="border border-gray-300 px-4 py-2">number</td>
                  <td className="border border-gray-300 px-4 py-2">No</td>
                  <td className="border border-gray-300 px-4 py-2">Scale factor (0.1 to 2.0)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-blue-50 p-4 rounded-md border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-800 mb-2">Get Your API Key</h3>
          <p className="text-blue-700 mb-4">
            To use our API, you'll need an API key. Sign up for an account and generate your API key from the dashboard.
          </p>
          <div className="flex space-x-4">
            <a
              href="/signup"
              className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              Sign Up
            </a>
            <a
              href="/dashboard/api-keys"
              className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-medium text-blue-600 border border-blue-300 hover:bg-blue-50"
            >
              Manage API Keys
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
