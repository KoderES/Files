{
    "exportFormatVersion": 2,
    "exportTime": "2021-03-05 13:48:06",
    "containerVersion": {
        "path": "accounts/3624785949/containers/40527619/versions/0",
        "accountId": "3624785949",
        "containerId": "40527619",
        "containerVersionId": "0",
        "container": {
            "path": "accounts/3624785949/containers/40527619",
            "accountId": "3624785949",
            "containerId": "40527619",
            "name": "Consent Mode Test",
            "publicId": "GTM-W4RKSVV",
            "usageContext": [
                "WEB"
            ],
            "fingerprint": "1613669913564",
            "tagManagerUrl": "https://tagmanager.google.com/#/container/accounts/3624785949/containers/40527619/workspaces?apiLink=container"
        },
        "tag": [
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "tagId": "4",
                "name": "Google Analytics Universal Analytics",
                "type": "ua",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "overrideGaSettings",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "trackType",
                        "value": "TRACK_PAGEVIEW"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "gaSettings",
                        "value": "{{UA-122098300-7}}"
                    }
                ],
                "fingerprint": "1614282223786",
                "firingTriggerId": [
                    "9"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "tagId": "10",
                "name": "Default Consent",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n\n  gtag('consent', 'default', {\n    ad_storage: 'denied',\n    analytics_storage: 'denied',\n    wait_for_update: 500\n  });\n\n  gtag('set', 'ads_data_redaction', true);\n\n  // url_passthrough must be configured in conversion linker when using GTM\n  // gtag('set', 'url_passthrough', true);\n\n  dataLayer.push({\n    'event': 'default_consent',\n    'eventCallback': function() {\n      if ({{user consent (localStorage)}}) {\n        dataLayer.push({\n          'event': 'update_consent',\n          'user_consent': {{user consent (localStorage)}}\n        });\n      }\n    },\n    'eventTimeout' : 1000\n  });\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1614950152914",
                "firingTriggerId": [
                    "2147479553"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "tagId": "11",
                "name": "Conversion Linker",
                "type": "gclidw",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "enableCrossDomain",
                        "value": "false"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableUrlPassthrough",
                        "value": "true"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "enableCookieOverrides",
                        "value": "false"
                    }
                ],
                "fingerprint": "1614282902007",
                "firingTriggerId": [
                    "9"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "tagId": "13",
                "name": "Update Consent",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\n  var user_consent = {{user consent (dataLayer)}};\n  var consent = {};\n\n  switch (user_consent) {\n    case 'all':\n      consent = {\n        'ad_storage': 'granted',\n        'analytics_storage': 'granted'\n      };\n      break;\n    case 'ads':\n      consent = {\n        'ad_storage': 'granted'\n      };\n      break;\n    case 'analytics':\n      consent = {\n        'analytics_storage': 'granted'\n      };\n      break;\n    default:\n      consent = {\n        'ad_storage': 'denied',\n        'analytics_storage': 'denied'\n      };\n      break;\n  }\n\n  localStorage.setItem('user_consent_google', user_consent);\n  gtag('consent', 'update', consent);\n\n  console.log('consent updated');\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1614602636741",
                "firingTriggerId": [
                    "12"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "tagId": "17",
                "name": "Revoke Consent",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\n  dataLayer.push({\n    'event': 'update_consent',\n    'user_consent': ''\n  });\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1614603010811",
                "firingTriggerId": [
                    "16"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "tagId": "18",
                "name": "Google Ads Remarketing",
                "type": "sp",
                "parameter": [
                    {
                        "type": "BOOLEAN",
                        "key": "enableDynamicRemarketing",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "conversionId",
                        "value": "1234567890"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "customParamsFormat",
                        "value": "NONE"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "conversionLabel",
                        "value": "0987654321"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "rdp",
                        "value": "false"
                    }
                ],
                "fingerprint": "1614778629044",
                "firingTriggerId": [
                    "9"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "tagId": "19",
                "name": "Deny Consent",
                "type": "html",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "html",
                        "value": "<script>\n  dataLayer.push({\n    'event': 'update_consent',\n    'user_consent': 'denied'\n  });\n</script>"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "supportDocumentWrite",
                        "value": "false"
                    }
                ],
                "fingerprint": "1614950279809",
                "firingTriggerId": [
                    "20"
                ],
                "tagFiringOption": "ONCE_PER_EVENT",
                "monitoringMetadata": {
                    "type": "MAP"
                }
            }
        ],
        "trigger": [
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "triggerId": "8",
                "name": "DOM Ready",
                "type": "DOM_READY",
                "fingerprint": "1614282114095"
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "triggerId": "9",
                "name": "default_consent",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "default_consent"
                            }
                        ]
                    }
                ],
                "fingerprint": "1614282217475"
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "triggerId": "12",
                "name": "update_consent",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "update_consent"
                            }
                        ]
                    }
                ],
                "fingerprint": "1614598682744"
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "triggerId": "16",
                "name": "revoke_consent",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "revoke_consent"
                            }
                        ]
                    }
                ],
                "fingerprint": "1614602528756"
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "triggerId": "20",
                "name": "deny_consent",
                "type": "CUSTOM_EVENT",
                "customEventFilter": [
                    {
                        "type": "EQUALS",
                        "parameter": [
                            {
                                "type": "TEMPLATE",
                                "key": "arg0",
                                "value": "{{_event}}"
                            },
                            {
                                "type": "TEMPLATE",
                                "key": "arg1",
                                "value": "deny_consent"
                            }
                        ]
                    }
                ],
                "fingerprint": "1614950274382"
            }
        ],
        "variable": [
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "variableId": "14",
                "name": "user consent (dataLayer)",
                "type": "v",
                "parameter": [
                    {
                        "type": "INTEGER",
                        "key": "dataLayerVersion",
                        "value": "2"
                    },
                    {
                        "type": "BOOLEAN",
                        "key": "setDefaultValue",
                        "value": "false"
                    },
                    {
                        "type": "TEMPLATE",
                        "key": "name",
                        "value": "user_consent"
                    }
                ],
                "fingerprint": "1614601975616",
                "formatValue": {}
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "variableId": "15",
                "name": "user consent (localStorage)",
                "type": "jsm",
                "parameter": [
                    {
                        "type": "TEMPLATE",
                        "key": "javascript",
                        "value": "function() {\n  return localStorage.getItem('user_consent_google');\n}"
                    }
                ],
                "fingerprint": "1614601963908",
                "formatValue": {}
            }
        ],
        "builtInVariable": [
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "type": "PAGE_URL",
                "name": "Page URL"
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "type": "PAGE_HOSTNAME",
                "name": "Page Hostname"
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "type": "PAGE_PATH",
                "name": "Page Path"
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "type": "REFERRER",
                "name": "Referrer"
            },
            {
                "accountId": "3624785949",
                "containerId": "40527619",
                "type": "EVENT",
                "name": "Event"
            }
        ],
        "fingerprint": "1614952086357",
        "tagManagerUrl": "https://tagmanager.google.com/#/versions/accounts/3624785949/containers/40527619/versions/0?apiLink=version"
    }
}
