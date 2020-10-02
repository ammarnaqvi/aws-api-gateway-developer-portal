// Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0

import React from 'react'

// swagger-ui
import SwaggerUI from 'swagger-ui'
import 'swagger-ui/dist/swagger-ui.css'

// semantic-ui
import { Container, Header, Icon } from 'semantic-ui-react'

// services
import { isRegistered } from 'services/self'
import { updateUsagePlansAndApisList, getApi } from 'services/api-catalog'

// components
import ApisMenu from 'components/ApisMenu'
import SwaggerLayoutPlugin from 'components/SwaggerUiLayout'
import PageWithSidebar from 'components/PageWithSidebar'

// state
import { store } from 'services/state.js'
import { observer } from 'mobx-react'

export default observer(class ApisPage extends React.Component {
  containerRef = React.createRef()
  hasRoot = false

  componentDidMount () { this.updateApi(true) }
  componentDidUpdate () { this.updateApi(false) }
  componentWillUnmount () { this.containerRef = null }

  updateApi(isInitial) {
    console.log('haha');
  /*eslint-disable */
    if (this.props.match.params.apiId == 'visa') {
      APIMaticDevPortal.show({
        container: "apimatic-widget",
        apiKey: "8bt0WJD4Z596xsB-lb8SOAFwmVnOV8gBbiCvZWkcq1RdH4VQqtg8GpBe6Zrgh5VcAohpXj3-yfRrs9faLK2XcA**",
        baseUrl: "https://www.apimatic.io",
        enableExport: true,
        renameHttpToRest: false,
        enableConsoleCalls: true,
        useProxyForConsoleCalls: false,
        initialPlatform: "http_curl_v1",
        languageSettings: {
          "http_curl_v1": {
            disableSdkDownload: false,
            sdkDownloadLink: ""
          }
          ,
          "java_eclipse_jre_lib": {
            disableSdkDownload: false,
            sdkDownloadLink: ""
          }
          ,
          "cs_net_standard_lib": {
            disableSdkDownload: false,
            sdkDownloadLink: ""
          }
          ,
          "cs_portable_net_lib": {
            disableSdkDownload: false
          }
          ,
          "python_generic_lib": {
            disableSdkDownload: false,
            sdkDownloadLink: ""
          }
          ,
          "ruby_generic_lib": {
            disableSdkDownload: false,
            sdkDownloadLink: ""
          }
          ,
          "node_javascript_lib": {
            disableSdkDownload: false,
            sdkDownloadLink: ""
          }
          ,
          "go_generic_lib": {
            disableSdkDownload: false,
            sdkDownloadLink: ""
          }

        },
        themeOverrides: {
          themeType: "cool",
          palette: {
            primaryColor: "#f7b600"
          },
          fontSources: [
          ],
          cssStyles: {
            headings: {
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              h1: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "24px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "0.9"
              },
              h2: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "23px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "0.82"
              },
              h3: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "19px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1"
              },
              h4: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "17px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.17"
              },
              h5: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "15",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.26"
              },
              h6: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "14px",
                fontWeight: "600",
                fontStyle: "normal",
                lineHeight: "1.35"
              }
            },
            body: {
              fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
              text1: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.78"
              },
              text2: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "13px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.5"
              },
              text3: {
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue, Arial', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
                fontSize: "12px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66"
              }
            },
            code: {
              fontFamily: "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
              blockCode: {
                fontFamily: "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66"
              },
              inlineCode: {
                fontFamily: "'SFMono-400', Consolas, 'Liberation Mono', Menlo, Courier",
                fontSize: "14px",
                fontWeight: "400",
                fontStyle: "normal",
                lineHeight: "1.66"
              }
            }
          }
        }
      });
    }
    else {
    APIMaticDevPortal.show({
      container: "apimatic-widget",
      apiKey: "8bt0WJD4Z596xsB-lb8SOPRk833SKx2PUWWvjFQups9Rzw1pPufY-HdEnUec_6-tKrMFscRo4roAoCNhJXSItg**",
      baseUrl: "https://www.apimatic.io",
      enableExport: true,
      renameHttpToRest: false,
      enableConsoleCalls: true,
      useProxyForConsoleCalls: true,
      initialPlatform: "http_curl_v1",
      languageSettings: {
        "http_curl_v1": {
          disableSdkDownload: false,
          sdkDownloadLink: ""
        }
        ,
        "java_eclipse_jre_lib": {
          disableSdkDownload: false,
          sdkDownloadLink: ""
        }
        ,
        "php_generic_lib": {
          disableSdkDownload: false,
          sdkDownloadLink: ""
        }
        ,
        "python_generic_lib": {
          disableSdkDownload: false,
          sdkDownloadLink: ""
        }
        ,
        "ruby_generic_lib": {
          disableSdkDownload: false,
          sdkDownloadLink: ""
        }
        ,
        "cs_net_standard_lib": {
          disableSdkDownload: false,
          sdkDownloadLink: ""
        }
        ,
        "cs_portable_net_lib": {
          disableSdkDownload: false
        }
        ,
        "node_javascript_lib": {
          disableSdkDownload: false,
          sdkDownloadLink: ""
        }
      },
      themeOverrides: {
        themeType: "cool",
        palette: {
          primaryColor: "#39e6ba"
        }
      }
    });
  
    }
 /*eslint-enable */
    return getApi(this.props.match.params.apiId || 'ANY', true, this.props.match.params.stage, isInitial)
      .then(api => {
        if (this.containerRef == null) return
        const elem = this.containerRef.current
        const isFirstLoad = !this.hasRoot
        console.log(api.swagger);
        this.hasRoot = elem != null
        if (api && elem != null) {
          const cell = {
            shouldPreauthorizeApiKey: false,
            preauthorizeApiKey: () => {
              cell.shouldPreauthorizeApiKey = true
            }
          }

          const swaggerUiConfig = {
            domNode: this.containerRef.current,
            plugins: [SwaggerLayoutPlugin],
            supportedSubmitMethods: [],
            spec: api.swagger,
            onComplete: () => cell.preauthorizeApiKey()
          }
          if (isRegistered()) {
            delete swaggerUiConfig.supportedSubmitMethods
          }

          const uiHandler = SwaggerUI(swaggerUiConfig)
          cell.preauthorizeApiKey = () => {
            if (store.apiKey) {
              uiHandler.preauthorizeApiKey('api_key', store.apiKey)
            }
          }
          if (cell.shouldPreauthorizeApiKey) {
            cell.preauthorizeApiKey()
          }

          if (isFirstLoad) return updateUsagePlansAndApisList(true)
        }
      })
  }

  render () {
    let errorHeader
    let errorBody

    if (store.apiList.loaded) {
      if (!store.apiList.apiGateway.length && !store.apiList.generic.length) {
        errorHeader = 'No APIs Published'
        errorBody = 'Your administrator hasn\'t added any APIs to your account. Please contact them to publish an API.'
      } else if (!store.api) {
        errorHeader = 'No Such API'
        errorBody = 'The selected API doesn\'t exist.'
      }
    }

    return (
      <PageWithSidebar
        sidebarContent={<ApisMenu path={this.props.match} activateFirst={true} />}
        SidebarPusherProps={{ className: 'swagger-section' }}
      >
        <div className='swagger-ui-wrap' ref={this.containerRef}>
          <div id="apimatic-widget" style={{ height: '94vh', width: '100%' }}></div>
          {errorHeader && errorBody && (
            <>
              <Header as='h2' icon textAlign='center' style={{ padding: '40px 0px' }}>
                <Icon name='warning sign' circular />
                <Header.Content>{errorHeader}</Header.Content>
              </Header>
              <Container text textAlign='justified'>
                <p>{errorBody}</p>
              </Container>
            </>
          )}
        </div>
      </PageWithSidebar>
    )
  }
})
